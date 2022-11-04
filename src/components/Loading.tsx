
interface Props {
    width: string;
    height: string;

}

export default function LoadingProps({ width, height }: Props) {
    if (width === "rnd") width = `${Math.floor(Math.random() * 3) + 3}rem`;

    return (
        <div className={`bg-slate-700 rounded animate-pulse`} style={{ width: width, height: height }}></div>
    )
}