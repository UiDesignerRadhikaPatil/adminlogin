import React, { useState } from 'react';
import "../Static/css/superadmindashboard.css";

function Dashboard() {
    const [isHovered, setIsHovered] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState('col-2'); // Initial width of the sidebar

    const handleSidebarToggle = () => {
        // Toggle the sidebar width between 'col-3' and 'col-1'
        setSidebarWidth(sidebarWidth === 'col-2' ? 'col-1' : 'col-2');
    };

    const viewClass = sidebarWidth === 'col-2' ? 'col-10' : 'col-11';
    return (
        <>


            <div class="row">
                <div className={sidebarWidth + ' sidebar'}>
                    <button className='btn' onClick={handleSidebarToggle}>Button</button>
                </div>
                <div className={viewClass + ' view'}>
                    <div className="row">
                        <div className='col-12'>
                            <div className="header">
                                <h1>SNP</h1>
                            </div>
                        </div>
                        {/* //!card 1 */}
                        <div className="col-3 menu">
                            <div className="card">
                                <div className="container">
                                    <h4 className='title'>
                                        <b >Invoice</b>
                                    </h4>
                                    <div className='row'>
                                        <div className='info'>
                                            <div className='col-6 '>
                                                <p>This Month</p>
                                            </div>
                                            <div className='col-6 btn'>
                                                <button
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    className={`hoverButton ${isHovered ? 'hovered' : ''} `}
                                                >
                                                    $56,353,516,...
                                                    {isHovered && <div className="tooltip">$56,353,516,510.36</div>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 2 */}
                        <div className="col-3 menu">
                            <div className="card">
                                <div className="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div className='row'>
                                        <div className='info'>
                                            <div className='col-6 '>
                                                <p>This Month</p>
                                            </div>
                                            <div className='col-6 btn'>
                                                <button
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    className={`hoverButton ${isHovered ? 'hovered' : ''} `}
                                                >
                                                    $19,396,729,...
                                                    {isHovered && <div className="tooltip">$19,396,729.73</div>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 3 */}
                        <div className="col-3 menu">
                            <div className="card">
                                <div className="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div className='row'>
                                        <div className='info'>
                                            <div className='col-6 '>
                                                <p>This Month</p>
                                            </div>
                                            <div className='col-6 btn'>
                                                <button
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    className={`hoverButton ${isHovered ? 'hovered' : ''} `}
                                                >
                                                    $107,695,177,...
                                                    {isHovered && <div className="tooltip">$107,695,177.75</div>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 4 */}
                        <div className="col-3 menu">
                            <div className="card">
                                <div className="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div className='row'>
                                        <div className='info'>
                                            <div className='col-6 '>
                                                <p>This Month</p>
                                            </div>
                                            <div className='col-6 btn'>
                                                <button
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    className={`hoverButton ${isHovered ? 'hovered' : ''} `}
                                                >
                                                    $56,245,821,...
                                                    {isHovered && <div className="tooltip">$56,245,821,332.61</div>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* reviews section */}
                    <div className="row">
                        {/* //!card 1 */}
                        <div className="col-9 menu">
                            <div className="status">
                                <div className="container">
                                    {/* <h4>
                                        <b>Invoice</b>
                                    </h4> */}
                                    <div className="col-4 menu">
                                        <div className="S">
                                            <div className="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 menu">
                                        <div className="S">
                                            <div className="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 menu">
                                        <div className="S">
                                            <div className="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!cutomerview */}
                        <div className="col-3 menu">
                            <div className="status">
                                <div className="container">

                                    <b>Progress bar round</b>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tables  */}
                    <div className='row'>
                        <div className='col-6 menu'>
                            <div className='tables'>
                                <div className=" table-container">
                                    <table className='col-12'>
                                        <thead>
                                            <tr>
                                                <th>Number</th>
                                                <th>Client</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col-6 menu'>
                            <div className='tables'>
                            <div className=" table-container">
                                    <table className='col-12'>
                                        <thead>
                                            <tr>
                                                <th>Number</th>
                                                <th>Client</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            <tr>
                                                <td>164</td>
                                                <td>Salah eddine Lalami</td>
                                                <td>$ 3,200.00</td>
                                                <td><button>SENT</button></td>
                                                <td className='action'>...</td>
                                            </tr>
                                            {/* Add more rows as needed */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SuperAdminDashboard;
