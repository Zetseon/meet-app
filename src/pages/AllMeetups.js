import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://meet-app-25acc-default-rtdb.firebaseio.com/meetups.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const items = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					items.push(meetup);
				}
				setIsLoading(false);
				setLoadedMeetups(items);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}
	return (
		<section>
			<h1>All Meetups Page!</h1>
			<ul>
				<MeetupList items={loadedMeetups} />
			</ul>
		</section>
	);
}

export default AllMeetupsPage;
