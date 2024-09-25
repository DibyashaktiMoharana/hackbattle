import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Trash2, Recycle, BarChart2, Users } from 'lucide-react'

const BentoGrid = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 auto-rows-[minmax(100px,auto)]">
          {/* Large stat box */}
          <motion.div
            className="col-span-2 row-span-2 bg-[#75fba6] rounded-lg p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-black text-lg">Waste Collected Last Year</p>
            <div className="flex items-end justify-between">
              <span className="text-6xl font-bold text-black">1.2M</span>
              <span className="text-2xl text-black">Tons</span>
            </div>
            <Truck className="w-16 h-16 text-black self-end" />
          </motion.div>

          {/* Smart bins stat */}
          <motion.div
            className="bg-[#fade77] rounded-lg p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-black text-sm">Smart Bins Deployed</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-black">5,234</span>
              <Trash2 className="w-8 h-8 text-black" />
            </div>
          </motion.div>

          {/* Recycling rate */}
          <motion.div
            className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#75fba6] text-sm">Recycling Rate</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-[#75fba6]">37%</span>
              <span className="text-[#fade77] text-sm">+5%</span>
            </div>
          </motion.div>

          {/* Route optimization */}
          <motion.div
            className="col-span-2 bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-[#fade77] text-lg">Route Optimization</p>
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full h-16 bg-black rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#75fba6] to-[#fade77]"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <p className="text-white text-right">75% Efficiency Increase</p>
          </motion.div>

          {/* Team stats */}
          <motion.div
            className="row-span-2 bg-[#75fba6] rounded-lg p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-black text-lg">Our Team</p>
            <div className="flex-grow flex items-center justify-center">
              <Users className="w-20 h-20 text-black" />
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-black">250+</p>
              <p className="text-sm text-black">Waste Management Experts</p>
            </div>
          </motion.div>

          {/* CO2 Reduction */}
          <motion.div
            className="bg-[#fade77] rounded-lg p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-black text-sm">CO2 Reduction</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-black">18K</span>
              <span className="text-sm text-black">Tons/Year</span>
            </div>
          </motion.div>

          {/* Analytics dashboard users */}
          <motion.div
            className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#75fba6] text-sm">Dashboard Users</p>
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-[#75fba6]">10K+</span>
              <BarChart2 className="w-8 h-8 text-[#fade77]" />
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.div
            className="col-span-2 bg-[#ff6a00] rounded-lg p-6 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-bold text-white text-center">
              Building the Future of Waste Management
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="bg-black rounded-lg p-4 flex items-center justify-center border-2 border-[#75fba6]"
            whileHover={{ scale: 1.05 }}
          >
            <Recycle className="w-16 h-16 text-[#75fba6]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid