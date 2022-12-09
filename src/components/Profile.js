function Profile({name, age, proffision, photo}){
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {proffision}</p>
        </div>
    )
}