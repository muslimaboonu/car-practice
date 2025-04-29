import { OrbitProgress } from 'react-loading-indicators'
import "../loading/Loading.css"
export default function Loading() {
    return (
        <div className='loading'><OrbitProgress color={["#f2f8f2", "#f2f5f8", "#f8f2f8", "#f8f5f2"]} className="loading" /></div>
    )
}
