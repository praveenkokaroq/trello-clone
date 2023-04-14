import { BoardData } from "react-trello-ts/dist/types/Board";
export const boardData: BoardData = {
  lanes: [
    {
      cards: [
        {
          description: "Add google auth",
          id: "google-auth",
          label: "10 mins",
          laneId: "PLANNED",
          title: "Dispose Garbage",
        },
        {
          description: "Add google auth",
          id: "Plan3",
          label: "30 mins",
          laneId: "PLANNED",
          title: "Add google auth",
        },
      ],
      currentPage: 1,
      id: "PLANNED",
      label: "20/70",
      style: {
        width: 280,
      },
      title: "Backlog",
    },
    {
      cards: [
        {
          description:
            "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses",
          id: "Wip1",
          label: "30 mins",
          laneId: "WIP",
          title: "Clean House",
        },
      ],
      currentPage: 1,
      id: "WIP",
      label: "10/20",
      style: {
        width: 280,
      },
      title: "Work In Progress",
    },
    {
      cards: [],
      currentPage: 1,
      id: "BLOCKED",
      label: "0/0",
      style: {
        width: 280,
      },
      title: "Blocked",
    },
    {
      cards: [
        {
          description: "Setup chakra UI with theme",
          id: "Completed1",
          label: "15 mins",
          laneId: "COMPLETED",
          title: "Install Chakra UI",
        },
        {
          description: "Build the layout using Chakra UI",
          id: "Completed2",
          label: "15 mins",
          laneId: "COMPLETED",
          title: "Create app layout",
        },
      ],
      currentPage: 1,
      id: "COMPLETED",
      label: "2/5",
      style: {
        width: 280,
      },
      title: "Completed",
    },
  ],
};
