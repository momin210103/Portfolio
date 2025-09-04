import { Typewriter } from "react-simple-typewriter";

export default function HeroText() {
  return (
    <h1 className="text-4xl font-extrabold text-primary">
      <Typewriter
        words={['Hello!','I am Momin Sheikh ']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
  );
}
