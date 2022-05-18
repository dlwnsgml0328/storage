import { useState } from "react";

const Audio1 = () => {
  const [audioError, setAudioError] = useState();
  const [audio, setAudio] = useState();

  // useEffect(() => {
  //   console.log("audio is: ", audio);
  // }, [audio]);

  // 1. load the audio in a user interaction
  const handleLoadClick = () => {
    const _audio = new Audio(
      "https://d28btnt2z9x7nc.cloudfront.net/uploads/bgm/6/%EC%8B%9C%EA%B3%B5%ED%96%A51_re.mp3"
    );
    _audio.load();
    _audio.autoplay = true;
    _audio.muted = true;
    _audio.loop = true;
    _audio.addEventListener("canplaythrough", () => {
      _audio.muted = false;
      console.log("loaded audio", _audio);
      setAudio(_audio);
    });
  };

  // 2. now you can play the audio on all subsequent events
  const handleClick = () => {
    setAudioError(undefined);

    audio &&
      audio.play().catch((e) => {
        setAudioError(e);
        console.log(e.response); // not allowed 와 같은 것을 캐치해서 setTimeout 과 같은 호출 스케쥴링을 줘서 다시 한 번 요청을 보내고 정상적으로 동작하는지 확인해볼 것
      });
  };

  return (
    <div className="flex flex-col space-y-4">
      <p className="mb-4">
        The work around is to load the audio after a user interaction. Now you
        can play audio after async operations on iOS.
      </p>
      <button onClick={handleLoadClick} disabled={audio !== undefined}>
        {audio ? "▼ Click the button below to play the audio" : "Load Audio!"}
      </button>

      <button onClick={handleClick} disabled={audio === undefined}>
        {audio
          ? "Play after resolving a promise ▶"
          : "▲ Click the button above to load audio"}
      </button>

      {audioError && (
        <div className="mt-4 text-red-600">
          AUDIO ERROR: {audioError.message}
        </div>
      )}
    </div>
  );
};

export default Audio1;
