import React from "react";

const Search = ({setSearch, search} : any) => {
	return (
		<>
			<div className={`search-popup ${search ? "active" : ""}`}>
				<div className="search-popup__overlay search-toggler" onClick={() => setSearch(false)}></div>
				<div className="search-popup__content">
					<form onSubmit={e => e.preventDefault()} style={{display: "flex"}}> 
						<input type="text" id="search" placeholder="Search Here..." style={{display: 'inline-block'}} />
						<button
							type="submit" style={{display: 'inline-block'}}
							aria-label="search submit"
							className="thm-btn"
						>
							<i className="icon-magnifying-glass"></i>
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Search;
