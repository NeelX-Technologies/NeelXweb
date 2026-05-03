import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiLogOut, FiBriefcase, FiPhone, FiMail, FiCalendar, 
  FiTrash2, FiEye, FiSearch, FiRefreshCw, FiChevronRight,
  FiFilter, FiX, FiCheckCircle, FiClock
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/neelcadmin');
    } else {
      fetchOrders();
    }
  }, [navigate]);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, { method: 'DELETE' });
      setOrders(orders.filter(order => order._id !== id));
      if (selectedOrder?._id === id) setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to delete order:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    localStorage.removeItem('adminEmail');
    navigate('/neelcadmin');
  };

  const filteredOrders = orders.filter(order => 
    `${order.firstName} ${order.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Total Inquiries', value: orders.length, icon: <FiBriefcase />, color: 'blue' },
    { label: 'Recent (24h)', value: orders.filter(o => new Date(o.createdAt) > new Date(Date.now() - 24*60*60*1000)).length, icon: <FiClock />, color: 'emerald' },
    { label: 'Contacted', value: 0, icon: <FiCheckCircle />, color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#151C2C]/80 backdrop-blur-md border-b border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">N</div>
            <h1 className="text-xl font-bold">NeelX <span className="text-blue-500">Admin</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden md:block">{localStorage.getItem('adminEmail')}</span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors"
            >
              <FiLogOut /> <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#151C2C] border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${stat.color}-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${stat.color}-600/20 text-${stat.color}-400 rounded-2xl flex items-center justify-center text-xl`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name, email, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#151C2C] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <button 
            onClick={fetchOrders}
            className="px-6 py-4 bg-[#151C2C] border border-white/10 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <FiRefreshCw className={isLoading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>

        {/* Table Content */}
        <div className="bg-[#151C2C] border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4">Client</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Budget / Timeline</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="5" className="px-6 py-8 h-20 bg-white/5"></td>
                    </tr>
                  ))
                ) : filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order._id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-medium text-white">{order.firstName} {order.lastName}</div>
                        <div className="text-xs text-gray-500">{order.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-600/10 text-blue-400 border border-blue-600/20 rounded-full text-xs font-medium">
                          {order.serviceType}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">{order.projectBudget}</div>
                        <div className="text-xs text-gray-500">{order.timeline}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                            className="p-2 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                            title="View Details"
                          >
                            <FiEye />
                          </button>
                          <button 
                            onClick={() => handleDelete(order._id)}
                            className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                            title="Delete"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-20 text-center text-gray-500">
                      No inquiries found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0B0F1A]/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-[#151C2C] border border-white/10 w-full max-w-2xl rounded-3xl relative z-10 overflow-hidden shadow-2xl animate-scaleIn">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-bold">Inquiry Details</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><FiX /></button>
            </div>
            
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
              {/* Client Info */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Full Name</p>
                  <p className="font-medium text-lg">{selectedOrder.firstName} {selectedOrder.lastName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Service Required</p>
                  <p className="font-medium text-lg text-blue-400">{selectedOrder.serviceType}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Email</p>
                  <a href={`mailto:${selectedOrder.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FiMail /> {selectedOrder.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Phone</p>
                  <a href={`tel:${selectedOrder.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <FiPhone /> {selectedOrder.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Budget</p>
                  <p className="font-medium">{selectedOrder.projectBudget}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Timeline</p>
                  <p className="font-medium">{selectedOrder.timeline}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Project Description</p>
                <div className="bg-[#0B0F1A]/50 border border-white/5 p-4 rounded-2xl text-gray-300 leading-relaxed">
                  {selectedOrder.projectDescription}
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiCalendar /> Submitted on {new Date(selectedOrder.createdAt).toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiSearch /> Heard from: {selectedOrder.hearAboutUs || 'Not specified'}
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 flex gap-4">
              <button 
                onClick={() => handleDelete(selectedOrder._id)}
                className="flex-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              >
                <FiTrash2 /> Delete Inquiry
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 bg-white/10 hover:bg-white/20 py-3 rounded-xl font-medium transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
