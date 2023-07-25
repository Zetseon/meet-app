import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavoriteContext from '../../store/favorites-context';

function MeetupItem(props) {
	const favoriteCtx = useContext(FavoriteContext);
	const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
	
	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoriteCtx.removeFavorite(props.id)
		} else {
			favoriteCtx.addFavorite({
				id: props.id,
				title: props.title,
				image: props.image,
				address: props.address,
				description:props.description
		});
		}
	}
	return (
		<li className={classes.li}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt="" />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorite' : 'Add to favorite'}</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
