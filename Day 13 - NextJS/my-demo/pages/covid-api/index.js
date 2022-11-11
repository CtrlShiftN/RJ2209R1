import axios from "axios";
import React from 'react'

export async function getStaticProps() {
    const data = await axios.get('https://api.covid19api.com/total/country/vietnam');
    return {
        props: {
            covidInfo: data.data
        }
    }
}

const Index = ({ covidInfo }) => {
    return (
        <div className="container pt-3">
            <h2>Vietnam's COVID-19 In4mation</h2>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        covidInfo.map((info, index) => (
                            <tr key={index}>
                                <td>{info.Date}</td>
                                <td>{info.Confirmed}</td>
                                <td>{info.Active}</td>
                                <td>{info.Recovered}</td>
                                <td>{info.Deaths}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index