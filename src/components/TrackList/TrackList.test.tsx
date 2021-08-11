import { render, screen } from "@testing-library/react";
import TrackList from "./index";
import { Provider } from 'react-redux';
import { store } from "../../redux";
import data from '../../data/SingleTrack'


global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
}

test("tracks component are rendered correctly", async ()  => {
    render(
    <Provider store={store}>
        <TrackList  track={data} />
    </Provider>
    );

    const albumName = screen.getByTestId("album-name");
    const trackName = screen.getByTestId("track-name");
    const selectTrackButton = screen.getByText(/select/i);
    expect(albumName).toBeVisible();
    expect(albumName).toHaveTextContent(data.album.name);
    expect(trackName).toBeVisible();
    expect(trackName).toHaveTextContent(data.name);
    expect(selectTrackButton).toBeVisible();
    // screen.debug();
  });

