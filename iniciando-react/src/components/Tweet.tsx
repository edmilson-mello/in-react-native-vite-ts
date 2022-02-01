type TweeProps = {
    text: string;  // sem o ponto de interrogação é tratado como obrigatório exemp: text?: string;
}

export function Tweet(props: TweeProps) {
    return(
        <div>{props.text}</div>
    );
}