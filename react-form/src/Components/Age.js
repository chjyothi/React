const Age = (props) => {
    return (
      <div>
        Age:
        <input
          type='text'
          ref={props.ageRef}
        />
      </div>
    )
  }
  
  export default Age