import * as React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./audio.css";

export default function Audio({ src }) {
	return (
		<AudioPlayer
			src={src}
		/>
	)
};
