import type {Company} from "../types/company"

type CompanyCardProps={
    company:Company
}

function CompanyCard({company}:CompanyCardProps){
    return (
    <article>
        <h2>{company.name}</h2>
        <p>{company.status}</p>
    </article>
    )
}

export default CompanyCard