import React, { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
import { useRouter } from 'next/router'
import logo from "../../assets/codex-logo.svg"
import logout from "../../assets/Logout.svg";
import { useStateContext } from "../../context/StateContext";
import base64 from "base-64"
import Select from 'react-select';

const Header = () => {
  const { user, handleLogout } = useStateContext();
  const router = useRouter();

  const [showNavDrop, setShowNavDrop] = useState(false)
  const [hideUserDetail, setHideUserDetail] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (router.pathname !== "/login" &&  router.pathname !=="/register" && router.pathname !== `/user/${router.query.username}`){
      if(typeof window !== undefined){
        window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 80 ? false : true);
        return () => (window.onscroll = null);
      }}
    }
  }, [router])

  const handleSearch =(e)=>{
    e.preventDefault()
    router.push(searchValue)
  }

  const aquaticCreatures =[
    {label: "PHP", value:'/php'},
    {label: "HTML", value:'/html5'},
    {label: "CSS", value:'/css3'},
    {label: "JavaScript", value:'/javascript'},
    {label: "J-query", value:'/jquery'},
    {label: "Angular", value:'/angular'},
    {label: "React.js", value:'/reactjs'},
    {label: "CodeIgniter", value:'/codeigniter'},
    {label: "Node.js", value:'/nodejs'},
  ]


    
  return (
    <>
      <header className="site-header">
        <div className="top-header py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-4 d-none d-md-block">
                <Link className="navbar-brand" href="/" title="Codex View">
                  {codexLogo}
                </Link>
              </div>
              <div className={`col-md-9 col-lg-8 justify-content-end m-auto ${user ? "d-flex": "d-sm-flex"} `}>
                <form className={user ? "form inp" : "form"} onSubmit={handleSearch} >
                  {/* <input
                    type="text"
                    className="form-control me-4"
                    placeholder="Search our tutorials, e.g. HTML, CSS, Angular"
                    required
                  /> */}
                  <Select
                      instanceId="react-select"
                      options={aquaticCreatures}
                      placeholder="Search our tutorials, e.g. HTML, CSS"
                      onChange={(e)=>setSearchValue(e.value)}
                    />
                  <button className="search-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7731 16.7107L12.6087 11.5426C13.6268 10.3216 14.2392 8.76115 14.2392 7.05688C14.2392 3.16877 11.0483 0.00738525 7.12327 0.00738525C3.19828 0.00738525 0 3.17246 0 7.06057C0 10.9487 3.1909 14.1101 7.11589 14.1101C8.78328 14.1101 10.3179 13.5383 11.5352 12.5829L16.7181 17.7658C17.0206 18.0683 17.4706 18.0683 17.7731 17.7658C18.0756 17.4633 18.0756 17.0132 17.7731 16.7107ZM1.51245 7.06057C1.51245 4.00616 4.02828 1.52352 7.11589 1.52352C10.2035 1.52352 12.7193 4.00616 12.7193 7.06057C12.7193 10.115 10.2035 12.5976 7.11589 12.5976C4.02828 12.5976 1.51245 10.1113 1.51245 7.06057Z"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </form>
                <div className="vr d-none d-md-inline-block"></div>
                {user ? (
                  <>
                    <div className="position-relative align-self-center user-header" style={{cursor: "pointer"}} onClick={()=>setHideUserDetail(!hideUserDetail)}>
                      <div className="userLogin mx-3 d-flex justify-content-between align-items-center">
                        <div className="userChar">{user.name.charAt(0).toUpperCase()}</div>
                      </div>
                      <div className="userDetails position-absolute" style={hideUserDetail ? {display: "block"} : {display: "none"}}>
                        <div className="d-flex align-items-center border-bottom px-3 py-2 my-2" onClick={()=>router.push(`/user/${base64.encode(user.email)}`)}>
                          <div className="userChar border">{user.name.charAt(0).toUpperCase()}</div>
                          <div className="usernameText mx-2" style={{color: "#212529"}}>{user?.name.charAt(0).toUpperCase() + user?.name.slice(1)}</div>
                        </div>
                        <div className="d-flex mx-3 my-2 justify-content-between border-bottom">
                          <div>
                            <p><Link style={{color: "#212529"}} href={`/user/${user.user_name}`}>Blogs</Link></p>
                          </div>
                          <div className="eclipsRound">{user?.blogs?.length || 0}</div>
                        </div>
                        <div className="d-flex mx-3 my-2 justify-content-between border-bottom">
                          <div>
                            <p><Link style={{color: "#212529"}} href={`/user/${user.user_name}`}>Issue</Link></p>
                          </div>
                          <div className="eclipsRound">{user?.issues?.length || 0}</div>
                        </div>
                        <div className="d-flex align-items-center pt-2  pb-4 mx-3" style={{cursor: "pointer"}} onClick={handleLogout}>
                          <Image src={logout} alt="logout" title="logout" />
                          <div className="mx-2">Logout</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="d-flex justify-content-evenly">
                    <button
                      className="btn-login bg-white align-self-center ms-3 text-dark"
                      onClick={() => router.push("/login")}
                    >
                      <svg
                        className="me-1"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6.49863C0 6.70112 0.161994 6.86312 0.364486 6.86312H9.16885L7.28162 8.75034C7.13852 8.89344 7.13852 9.12293 7.28162 9.26602C7.35182 9.33622 7.44631 9.37402 7.53811 9.37402C7.62991 9.37402 7.7244 9.33892 7.7946 9.26602L10.3055 6.75512C10.4486 6.61203 10.4486 6.38253 10.3055 6.23944L7.7946 3.72854C7.6515 3.58544 7.42201 3.58544 7.27892 3.72854C7.13582 3.87163 7.13582 4.10112 7.27892 4.24422L9.16615 6.13144H0.364486C0.161994 6.13414 0 6.29614 0 6.49863Z"
                          fill="#212529"
                        />
                        <path
                          d="M10.3244 0H2.6729C1.19875 0 0 1.19875 0 2.6729V4.24424C0 4.44673 0.161994 4.60872 0.364486 4.60872C0.566978 4.60872 0.728972 4.44673 0.728972 4.24424V2.6729C0.728972 1.60104 1.60104 0.728972 2.6729 0.728972H10.3271C11.399 0.728972 12.271 1.60104 12.271 2.6729V10.3271C12.271 11.399 11.399 12.271 10.3271 12.271H2.6729C1.60104 12.271 0.728972 11.399 0.728972 10.3271V8.77466C0.728972 8.57217 0.566978 8.41018 0.364486 8.41018C0.161994 8.41018 0 8.57217 0 8.77466V10.3271C0 11.8012 1.19875 13 2.6729 13H10.3271C11.8012 13 13 11.8012 13 10.3271V2.6729C12.9973 1.19875 11.7985 0 10.3244 0Z"
                          fill="#212529"
                        />
                      </svg>
                      Login
                    </button>
                    <button
                      className="btn-login align-self-center ms-3 text-white"
                      onClick={() => router.push("/register")}
                    >
                      <svg
                        className="me-1"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 7.052C7.995 7.052 9.5 5.547 9.5 3.552C9.5 1.557 7.995 0.052002 6 0.052002C4.005 0.052002 2.5 1.557 2.5 3.552C2.5 5.547 4.005 7.052 6 7.052ZM7 8H5C2.243 8 0 10.243 0 13V14H12V13C12 10.243 9.757 8 7 8ZM18.294 3.292L13.994 7.584L12.702 6.292L11.288 7.706L13.994 10.41L19.706 4.708L18.294 3.292Z"
                          fill="white"
                        />
                      </svg>
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <nav
         className={ isScrolled ? 
          `${
              router.pathname === "/login"
               || router.pathname === "/register" || router.pathname === `/user/${router.query.username}`
                ? "navbar navbar-expand-md navbar-light"
                : "navbar navbar-expand-md navbar-light fixed-top"
            }`
        : "navbar navbar-expand-md navbar-light"    
      }
      >
          <div className="container">
            <Link className="navbar-brand d-md-none d-sm-block" href="/" title="Codex View">
              <Image src={logo} alt="Codex View" title="Codex View" />
            </Link>
            <button
              className="navbar-toggler"
              onClick={()=>setShowNavDrop(!showNavDrop)}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showNavDrop && "show"}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link 
                  className={`nav-link ${router.pathname === "/" && 'active'} `}
                   aria-current="page" href="/" title="Codex View">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown d-none d-md-block">
                  <p
                    className={`nav-link dropdown-toggle ${(router.pathname === "/web-development" || router.pathname === "/web-designing" || router.query.slug?.toString() !== undefined && router?.asPath === `/${router?.query?.slug[0]}/${router?.query?.slug[1]}` || router.query.slug?.toString() !== undefined && router?.asPath === `/${router?.query?.slug[0]}`) && 'active'}`}
                    id="navbarDropdown"
                    title="Codex View Tutorials"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tutorials {" "}
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.733 0.283142H11.7093L6.7088 6.62221C6.65816 6.68438 6.58045 6.72098 6.50024 6.72098C6.41802 6.72098 6.34231 6.68438 6.29017 6.62221L1.29121 0.283142H0.266955C0.163677 0.283142 0.0704256 0.340797 0.0268082 0.433046C-0.0183133 0.525294 -0.00527819 0.63509 0.0568892 0.714303L6.29117 8.61658C6.34331 8.67925 6.41902 8.71685 6.50124 8.71685C6.58146 8.71685 6.65916 8.67925 6.7098 8.61658L12.9431 0.713802C13.0073 0.63509 13.0173 0.524793 12.9722 0.432544C12.9295 0.340797 12.8353 0.283142 12.733 0.283142Z" />
                    </svg>
                  </p>
                  <div className="submenu p-4">
                    <h2 className="text-white">Tutorials </h2>
                    <div className="submenu-2 d-flex pt-3">
                      <div className="circle-icon w-50">
                        <h5 className="text-white pb-3 fw-bold">Courses</h5>
                        <Link
                          href="/web-development"
                          title="Web Development Tutorials"
                          className="d-flex text-white align-self-center pb-0 mb-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check2-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                          </svg>
                          <p className="ms-2 fw-bold">Web Development</p>
                        </Link>
                        <Link href="/web-designing" title="Web Designing Tutorials" className="d-flex text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check2-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                          </svg>
                          <p className="ms-2 fw-bold">Web Designing</p>
                        </Link>
                      </div>
                      <div className="menu-btn w-50">
                        <h5 className="text-white fw-bold">Skills</h5>
                        <Link href="/php" title="Web Development PHP Tutorials" className="btn btn-light mb-2 me-1">
                          PHP
                        </Link>
                        <Link href="/web-development" title="Web Development Laravel Tutorials" className="btn btn-light mb-2 me-1">
                          Laravel
                        </Link>
                        <Link href="/angular" title="Web Designing Angular Tutorials" className="btn btn-light mb-2 me-1">
                          Angular
                        </Link>
                        <Link href="/reactjs" title="Web Designing React.js Tutorials" className="btn btn-light mb-2 me-1">
                          React Js
                        </Link>
                        <Link href="/codeigniter" title="Web Development CodeIgniter Tutorials" className="btn btn-light mb-2 me-1">
                          CodeIgniter
                        </Link>
                        <Link href="/web-designing/" title="Web Designing Vue.js Tutorials" className="btn btn-light mb-2 me-1">
                          VueJS
                        </Link>
                        <Link href="/jquery" title="Web Designing J-Query Tutorials" className="btn btn-light mb-2 me-1">
                          J-Query
                        </Link>
                        <Link href="/javascript" title="Web Designing JavaScript Tutorials" className="btn btn-light mb-2 me-1">
                          JavaScript
                        </Link>
                        <Link href="/html5" title="Web Designing HTML5 Tutorials" className="btn btn-light mb-2 me-1">
                          Html5
                        </Link>
                        <Link href="/css3" title="Web Designing CSS3 Tutorials" className="btn btn-light mb-2 me-1">
                          Css3
                        </Link>
                      </div>
                    </div>
                    {/* <div className="text-align-center menu-btn submenu-2">
                      <h5 className="text-white fw-bold">Videos</h5>
                      <Link href="/video" title="PHP Video Tutorials" className="btn btn-light me-1">
                        PHP
                      </Link>
                      <Link href="/video" title="Laravel Video Tutorials" className="btn btn-light me-1">
                        Laravel
                      </Link>
                      <Link href="/video" title="Angular Video Tutorials" className="btn btn-light me-1">
                        Angular
                      </Link>
                      <Link href="/video" title="CodeIgniter Video Tutorials" className="btn btn-light me-1">
                        CodeIgniter
                      </Link>
                    </div> */}
                  </div>
                </li>
                <li className="nav-item d-block d-md-none">
                  <Link 
                  className={`nav-link ${(router.pathname === "/web-development") && 'active'}`} 
                  title='Web Designing tutorials' href="/web-development">
                    Web Development
                  </Link>
                </li>
                <li className="nav-item d-block d-md-none">
                  <Link 
                  className={`nav-link ${(router.pathname === "/web-designing") && 'active'}`} 
                  title='Web Development tutorials' href="/web-designing">
                    Web Designing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                  className={`nav-link ${router.pathname === "/courses" && 'active'}`} 
                  title="Courses" href="/courses">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link title="Issues" 
                  className={`nav-link ${(router.pathname === "/issues" || router.pathname === "/post-issue" || router.asPath === `/issues/${router.query.slug}`) && 'active'}`} 
                  href="/issues">
                    Issues
                  </Link>
                </li>
                <li className="nav-item">
                  <Link title="Blog" 
                  className={`nav-link ${(router.pathname === "/blog" || router.pathname === "/post-blogs" || router.asPath === `/blog/${router.query.slug}`) && 'active'}`}
                   href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link title="About Us"
                   className={`nav-link ${router.pathname === "/about" && 'active'}`}
                    href="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link title="Contact Us"
                   className={`nav-link ${router.pathname === "/contact" && 'active'}`} 
                   href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/web-designing" title="View Online Tutorials" className="online-tut">
            <button className="btn btn-outline-warning ">
              View Online Tutorials
            </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;



const codexLogo = <svg width="132" height="45" viewBox="0 0 132 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="132" height="45" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_353_59" transform="translate(0 -0.0046595) scale(0.00215054 0.00630824)"/>
</pattern>
<image id="image0_353_59" width="465" height="160" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdEAAACgCAYAAABTylZLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjY1M0VCNzRGODYxMTFFQ0JCRjVCNzY5MzEwMTYyOTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjY1M0VCNzVGODYxMTFFQ0JCRjVCNzY5MzEwMTYyOTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NjUzRUI3MkY4NjExMUVDQkJGNUI3NjkzMTAxNjI5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NjUzRUI3M0Y4NjExMUVDQkJGNUI3NjkzMTAxNjI5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puf9aHEAACk1SURBVHja7F0HvBXV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"/>
</defs>
</svg>
