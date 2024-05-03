export const useMovePosition = ({onHandleLoad}) => {
    const [position, setPosition] = useState(null);
    onHandleLoad(position, setPosition);
     useEffect(() => {
        if(position <= 75) {
            const setMoveCarousell = setInterval(() => {
                setPosition(position + 25);
            }, 3500);
            setTimeout(() => {
                clearInterval(setMoveCarousell);
            }, 3500);
        } else {
            setPosition(0);
        }
    }, [position]);
}