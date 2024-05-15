// // src/components/TabView.js
// import React from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
// import StatisticCard from './StatisticCard';
// import { FaMapMarkerAlt, FaTruck, FaDollarSign, FaPercent, FaPhone } from 'react-icons/fa';

// const TabView = () => {
//   return (
//     <Tabs defaultActiveKey="delivery" id="uncontrolled-tab-example" className="mb-3">
//       <Tab eventKey="delivery" title="Delivery">
//         <StatisticCard title="Total District" value="23" icon={<FaMapMarkerAlt />} />
//         <StatisticCard title="Total Beat" value="23" icon={<FaTruck />} />
//         <StatisticCard title="Total Order Amount" value="117,668.44" icon={<FaDollarSign />} />
//         <StatisticCard title="Total Delivery Amount" value="1,591.26" icon={<FaTruck />} />
//         <StatisticCard title="Total Delivery Percentage" value="1.35%" icon={<FaPercent />} />
//       </Tab>
//       <Tab eventKey="escalation" title="Escalation">
//         <StatisticCard title="Total Escalation Count" value="27" icon={<FaPhone />} />
//         <StatisticCard title="Positive Escalation Count" value="7" icon={<FaPhone />} />
//         <StatisticCard title="Negative Escalation Count" value="20" icon={<FaPhone />} />
//       </Tab>
//       <Tab eventKey="callingDay" title="Calling Day">
//         <StatisticCard title="Total Calling Day" value="7" icon={<FaPhone />} />
//         <StatisticCard title="Active Calling Day" value="20" icon={<FaPhone />} />
//       </Tab>
//     </Tabs>
//   );
// };

// export default TabView;


// src/components/TabView.js
import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import StatisticCard from './StatisticCard';
import ReusableTable from './ReusableTable';
import { FaMapMarkerAlt, FaTruck, FaDollarSign, FaPercent, FaPhone } from 'react-icons/fa';

const TabView = () => {
  const [key, setKey] = useState('delivery');

  const districtData = [
    { sno: 1, district: 'Agar', orderAmount: '₹36839.32', deliveryAmount: '1591.26', deliveryPercentage: '4.32%' },
    { sno: 2, district: 'Balaghat', orderAmount: '₹35805.40', deliveryAmount: '0.00', deliveryPercentage: '0.00%' },
    // Add more dummy data as needed
  ];

  const beatData = [
    { sno: 1, district: 'Anuppur', orderAmount: '₹10460.48', deliveryAmount: '0.00', deliveryPercentage: '0.00%' },
    { sno: 2, district: 'Badwara', orderAmount: '₹97.12', deliveryAmount: '0.00', deliveryPercentage: '0.00%' },
    // Add more dummy data as needed
  ];

  const escalationData = [
    { sno: 1, date: '2024-03-19', retailerCode: 'RR-00267', retailerName: 'Amit bakery' },
    { sno: 2, date: '2024-03-19', retailerCode: 'RR-00268', retailerName: 'aj bakery' },
    // Add more dummy data as needed
  ];

  const districtColumns = [
    { label: 'S.No', field: 'sno' },
    { label: 'District List', field: 'district' },
    { label: 'Order Amount', field: 'orderAmount' },
    { label: 'Delivery Amount', field: 'deliveryAmount' },
    { label: 'Delivery Percentage', field: 'deliveryPercentage' },
  ];

  const beatColumns = [
    { label: 'S.No', field: 'sno' },
    { label: 'District List', field: 'district' },
    { label: 'Order Amount', field: 'orderAmount' },
    { label: 'Delivery Amount', field: 'deliveryAmount' },
    { label: 'Delivery Percentage', field: 'deliveryPercentage' },
  ];

  const escalationColumns = [
    { label: 'S.No', field: 'sno' },
    { label: 'Date', field: 'date' },
    { label: 'Retailer Code', field: 'retailerCode' },
    { label: 'Retailer Name', field: 'retailerName' },
  ];

  return (
    <div>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="delivery" title="Delivery">
          {key === 'delivery' && (
            <>
              <StatisticCard title="Total District" value="23" icon={<FaMapMarkerAlt />} onClick={() => setKey('districtTable')} />
              <StatisticCard title="Total Beat" value="23" icon={<FaTruck />} onClick={() => setKey('beatTable')} />
              <StatisticCard title="Total Order Amount" value="117,668.44" icon={<FaDollarSign />} />
              <StatisticCard title="Total Delivery Amount" value="1,591.26" icon={<FaTruck />} />
              <StatisticCard title="Total Delivery Percentage" value="1.35%" icon={<FaPercent />} />
            </>
          )}
        </Tab>
        <Tab eventKey="escalation" title="Escalation">
          {key === 'escalation' && (
            <>
              <StatisticCard title="Total Escalation Count" value="27" icon={<FaPhone />} onClick={() => setKey('escalationTable')} />
              <StatisticCard title="Positive Escalation Count" value="7" icon={<FaPhone />} />
              <StatisticCard title="Negative Escalation Count" value="20" icon={<FaPhone />} />
            </>
          )}
        </Tab>
        <Tab eventKey="callingDay" title="Calling Day">
          {key === 'callingDay' && (
            <>
              <StatisticCard title="Total Calling Day" value="7" icon={<FaPhone />} />
              <StatisticCard title="Active Calling Day" value="20" icon={<FaPhone />} />
            </>
          )}
        </Tab>
      </Tabs>
      {key === 'districtTable' && <ReusableTable columns={districtColumns} data={districtData} />}
      {key === 'beatTable' && <ReusableTable columns={beatColumns} data={beatData} />}
      {key === 'escalationTable' && <ReusableTable columns={escalationColumns} data={escalationData} />}
    </div>
  );
};

export default TabView;

