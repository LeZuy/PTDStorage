import React from 'react';
import { BarChartOutlined, HomeOutlined, DatabaseOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Image, Menu, Button, theme } from 'antd';
import { GrStorage } from 'react-icons/gr';
import { TiBook } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
export default function Sidebar() {
    return (
        <div>
            <Image preview={false} src='/logo.png' alt='' className='mt-16' />

            <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <HomeOutlined />,
                        label: <NavLink to='home'>ホーム</NavLink>,
                    },
                    {
                        key: '2',
                        icon: <BarChartOutlined />,
                        label: <NavLink to='statistic'>統計</NavLink>,
                    },
                    {
                        key: '3',
                        icon: <TiBook fontSize={24} />,
                        label: <NavLink to='recipe'>レシピ</NavLink>,
                    },
                  
                    {
                        key: '4',
                        icon: <GrStorage />,
                        label: <NavLink to='fridge'>冷蔵庫</NavLink>,
                        children: [
                            {
                                key: '4-1',
                                label: <NavLink to='fridge/ingredients'>在庫ページ</NavLink>,
                            },
                            {
                                key: '4-2',
                                label: <NavLink to='fridge/category'>在庫の数種</NavLink>,
                            },
                            {
                                key: '4-3',
                                label: <NavLink to='fridge/history'>歴史</NavLink>,
                            },
                           
                        ],
                    },
                    {
                        key: '5',
                        icon: <MdManageAccounts  fontSize={24} />,
                        label: <NavLink to='account-manage'>アカウント管理</NavLink>,
                    },
                ]}
            />
        </div>
    );
}
