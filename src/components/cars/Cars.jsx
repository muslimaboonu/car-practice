import { useEffect } from "react";
import "../cars/Cars.css"
export default function Cars({ cars, setCars, limit, skip, addCars, setLoading, showButton, setShowButton, setError, error }) {
    useEffect(() => {
        setLoading(true)
        setShowButton(false)
        fetch(`https://json-api.uz/api/project/fn37/cars?limit=${limit}&skip=${skip}`)
            .then((req) => {
                return req.json()
            })
            .then((res) => {
                setCars((prev) => {
                    return [...prev, ...res.data]
                })
            }).catch(() => {
                setError("Resource not found")
                setShowButton(false)
            })
            .finally(() => {
                setLoading(false)
                setShowButton(true)
            })
    }, [skip])
    return (
        <div>
            <div className="cars">
                <div className="container">
                    {
                        cars && cars.map(({ name, description, price, brand, category }, i) => {
                            return (
                                <div key={i} className="card">
                                    <div className="filterCard">
                                        <span className="brand">{brand}</span>
                                        <h2>{name}</h2>
                                        <p>{description}</p>
                                        <span className="category">Category: {category}</span>
                                        <span className="price">Price: {price} $</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {showButton ? cars.length === 28 ? "" : <button onClick={() => addCars()}>More shows 6</button> : ""}
            </div>
        </div>
    )
}
