import { FC, useState } from "react";
import { View } from "react-native";
import { Calendar as BigCalendar } from "react-native-big-calendar";

const events = [
  {
    title: "Заметка 1",
    start: new Date(2025, 1, 14, 10, 0),
    end: new Date(2025, 1, 14, 11, 0),
  },
  {
    title: "Заметка 2",
    start: new Date(2025, 1, 15, 14, 0),
    end: new Date(2025, 1, 15, 15, 0),
  },
];

export const Calendar: FC = () => {
  const [ event, setEvent ] = useState(events);

  return (
    <View style={{ flex: 1 }}>
      <BigCalendar events={event} height={600} />
    </View>
  );
};
