const Experience = ({ company, date, description = null, position, technologies}) => {
  return (
    <div>
      <div>{date}</div>
      <div>{company}</div>
      <div>{position}</div>
      {description && <div>{description}</div>}
      <div>{technologies}</div>
    </div>
  )
}

export default Experience;