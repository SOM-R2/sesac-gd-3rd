// export default function CharacterInfo(props) {
// const characterData = props.characterData
// const {characterData} = props;
export default function CharacterInfo({ characterInfo }) {
    return (
        <>
            <div>Name: {characterInfo.name}</div>
            <div>Age: {characterInfo.age}</div>
            <div>NickName: {characterInfo.nickName}</div>
        </>
    );
}
