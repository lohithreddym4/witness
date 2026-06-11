import TimedReveal from "../cinematic/TimedReveal";

interface Props {
    title: string;
    story: string;
  }
  
  export default function StoryReflection({
    title,
    story,
  }: Props) {
    return (
      <div className="max-w-3xl">
  
        <h2 className="text-4xl mb-8">
          {title}
        </h2>
        {
            story
                .split("\n")
                .map((line, index) => (
                <TimedReveal
                    key={index}
                    text={line}
                    delay={index * 2000}
                />
                ))
        }
  
      </div>
    );
  }