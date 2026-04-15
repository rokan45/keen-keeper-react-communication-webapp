import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FriendContext } from '../../context/ContextProvider';

const StatPage = () => {
    
    const { storeCallInfo, storeTextInfo, storeVideoInfo } = useContext(FriendContext);

    // data based on the stored interaction arrays
    const data = [
        { name: 'Call', value: storeCallInfo.length || 0, color: '#2d5e4b' },  // Deep Green
        { name: 'Text', value: storeTextInfo.length || 0, color: '#a15bf9' },  // Purple
        { name: 'Video', value: storeVideoInfo.length || 0, color: '#4caf50' } // Light Green
    ];

    // Check if there is any data to show
    const totalInteractions = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="bg-white p-10 rounded-3xl shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center">
            <div className="w-full text-left mb-8">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">By Interaction Type</p>
            </div>

            <div className="h-75 w-full max-w-75">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={totalInteractions === 0 ? [{ value: 1 }] : data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}  /* This creates the "Donut" hole */
                            outerRadius={100}
                            paddingAngle={8}  /* Adds gaps between segments */
                            dataKey="value"
                            stroke="none"
                        >
                            {/* Map to apply custom colors */}
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={totalInteractions === 0 ? '#f3f4f6' : entry.color} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend to match your image */}
            <div className="flex gap-8 mt-8 text-sm font-medium text-gray-600">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatPage;