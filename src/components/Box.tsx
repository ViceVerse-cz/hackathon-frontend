
interface BoxProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    color?: string;
    padding?: string;
}



export default function Box(props: BoxProps) {
    return (
        <div className={`w-${props.width} h-${props.height} bg-${props.color} rounded p-${props.padding}`}>
            {props.children}
        </div>

    )
}

//default props
Box.defaultProps = {
    width: "100%",
    height: "100%",
    color: "black",
    padding: "3rem"
}