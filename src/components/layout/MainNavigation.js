import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNaivation() {
	const favoritesCtx = useContext(FavoritesContext);
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Meet ups!</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetups">New Meetups</Link>
					</li>
					<li>
						<Link to="/favorite-meetups">
							Favorite Meetups{" "}
							<span className={classes.badge}>
								{favoritesCtx.totalFavorites}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default MainNaivation;
