case "html":
                let sideColorHTML = { "--bar-clr": "#F3642C" };
                document.title = "HTML - Overview";
                return (
                    <>
                        <div className={theme === "light" ? "lang-wrapper_light" : "lang-wrapper"} style={sideColorHTML}>
                            <div className="lang-left-col">
                                <div className={theme === "light" ? "lang-left-bar_light" : "lang-left-bar"}>
                                    <div>
                                        <img src={HTMLLogo} className="" />
                                    </div>
                                </div>
                            </div>
                            <div className="lang-main-col">
                                <div className="lang-back-div">
                                    <Link href="/home" className={theme === "light" ? "lang-back_light" : "lang-back"}>BACK</Link>
                                </div>
                                <h3 className="lang-head"><span>What is H</span>TML?</h3>
                                <div>
                                    

                                </div>
                                <div>Try running some HTML code here... 👇</div>
                                <div className="code-block"></div>
                                <Link to={{ pathname: "" }} target="_blank" className={theme === "light" ? "lang-read-more_light" : "lang-read-more"}>Read more about HTML...</Link>
                            </div>
                        </div>
                    </>
                )
