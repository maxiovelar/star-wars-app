// import { render, screen, waitFor } from "@testing-library/react";
// import Planets, { PlanetsQueryResponse } from "../pages/planets";

// describe("<Planets />", () => {
//   let props: PlanetsQueryResponse;

//   beforeEach(() => {
//     props = {
//       data: {
//         count: 0,
//         next: "",
//         previous: "",
//         results: [
//           {
//             name: "planet1",
//             diameter: "1000",
//             climate: "arid",
//             population: "100",
//           },
//           {
//             name: "planet2",
//             diameter: "2000",
//             climate: "temperate",
//             population: "200",
//           },
//         ],
//       },
//     };
//   });

//   it("should render", () => {
//     render(<Planets {...props} />);
//     expect(screen.getByText("Planets")).toBeInTheDocument();
//   });

//   it("should the correct number of cards", async () => {
//     render(<Planets {...props} />);
//     await waitFor(() =>
//       expect(screen.getAllByTestId("card-image")).toHaveLength(2)
//     );
//   });

//   //   it("should handles valid API response", async () => {
//   //     mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ props }));
//   //     render(<Planets {...props} />);
//   //     await waitFor(() =>
//   //       expect(screen.getByText("Planets")).toBeInTheDocument()
//   //     );
//   //     expect(screen.getByText("Planet 1")).toBeInTheDocument();
//   //     expect(screen.getByText("Planet 2")).toBeInTheDocument();
//   //   });
// });
