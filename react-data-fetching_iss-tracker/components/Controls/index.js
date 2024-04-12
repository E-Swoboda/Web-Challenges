import {
  ControlsContainer,
  ControlsButton,
  ControlsDisplay,
} from "./Controls.styled";

export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <ControlsContainer>
      {longitude !== undefined && (
        <ControlsDisplay>Lat: {longitude.toFixed(5)}</ControlsDisplay>
      )}
      {latitude !== undefined && (
        <ControlsDisplay>Long: {latitude.toFixed(5)}</ControlsDisplay>
      )}
      <ControlsButton type="button" onClick={onRefresh}>
        Refresh
      </ControlsButton>
    </ControlsContainer>
  );
}
