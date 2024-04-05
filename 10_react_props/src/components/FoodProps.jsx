export default function FoodProps(props) {
    const { food, description } = props;
    return (
        <div>
            {`제가 좋아하는 음식은 `}
            <span style={{ color: 'red' }}>{food}</span>
            {`이고, `}
            <span style={{ color: 'red' }}>{food}</span>
            {`는 `}
            <span style={{ color: 'red' }}>{description}</span>
            {`입니다.`}
        </div>
    );
}

FoodProps.defaultProps = {
    food: '치킨',
};
