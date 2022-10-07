import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../redux/action_creators";
import Event from "../Event/Event";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div>
      {events &&
        events.map((event) => {
          <Event
            key={event.id}
            title={event.title}
            creators={event.creators}
            description={event.description}
            comics={event.comics}
            characters={event.characters}
            poster={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          />;
        })}
    </div>
  );
};

export default Events;
