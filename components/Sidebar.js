"use client";

import  Link  from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    return (
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link
                        href="/"
                        className={"list-group-item list-group-item-action py-2 ripple me-3"}
                        aria-current="true"
                        >
                        <i className="fas fa-chart-pie fa-fw me-3 "></i><span>Product</span>
                        </Link>
                        <Link href="/" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>User Management</span>
                        </Link> 
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-chart-line fa-fw me-3"></i><span>Setting</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                        </a>
                    </div>
                    </div>
                </nav>
                
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
                
                    <div className="container-fluid">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand ms-3" href="#">
                        Cashier
                    </a>
                    </div>
                </nav>
            </header>


    )
}