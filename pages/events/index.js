import { useRouter } from "next/router";
import Head from "next/head";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventshandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All events</title>
        <meta name="description" content="Find a lot of great events"/>
      </Head>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
