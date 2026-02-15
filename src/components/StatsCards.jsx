import { motion } from "framer-motion";

const StatsCards = ({ totalUsers }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <motion.div
          className="card shadow p-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h6>Total Users</h6>
          <h3>{totalUsers}</h3>
        </motion.div>
      </div>

      <div className="col-md-6">
        <motion.div
          className="card shadow p-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h6>Active Users</h6>
          <h3>{totalUsers}</h3>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCards;