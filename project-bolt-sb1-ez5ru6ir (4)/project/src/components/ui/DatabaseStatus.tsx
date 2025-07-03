import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Wifi, WifiOff } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const DatabaseStatus: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('count').limit(1);
        setIsConnected(!error);
      } catch (error) {
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkConnection();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="fixed bottom-4 right-4 z-50 p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600"
      >
        <Database className="h-6 w-6 text-blue-400" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-4 right-4 z-50 p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 flex items-center space-x-2"
    >
      <Database className="h-5 w-5 text-blue-400" />
      {isConnected ? (
        <Wifi className="h-4 w-4 text-green-400" />
      ) : (
        <WifiOff className="h-4 w-4 text-red-400" />
      )}
      <span className={`text-xs font-medium ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
        {isConnected ? 'QUANTUM DB ONLINE' : 'DB OFFLINE'}
      </span>
    </motion.div>
  );
};

export default DatabaseStatus;