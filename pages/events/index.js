import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventshandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
