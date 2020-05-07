import React from 'react';
import PropTypes from 'prop-types';
//import Resty from '../../containers/Resty/Resty';
//import styles from './Request.css';



const Request = ({ url, textBody, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      
      <label> URL: <input type="text" name="url" value={url} onChange={onChange}></input>
      </label>
      
      <div><label> <input type="radio" name="method" value="get"vonChange={onChange}/> GET 
      </label>

      <label><input type="radio" name="method" value="post"vonChange={onChange}/> POST 
      </label>

      <label><input type="radio" name="method" value="put" onChange={onChange}/> PUT 
      </label>

      <label><input type="radio" name="method" value="patch" onChange={onChange}/>PATCH 
      </label>

      <label><input type="radio" name="method" value="delete" onChange={onChange}/> DELETE 
      </label>
      </div>

      <textarea placeholder="JSON Body" name="textBody" value={textBody} onChange={onChange}>
      </textarea>

      <button type="submit">Submit</button>

    </form>
  </div>

);
Request.propTypes = {
  url: PropTypes.string.isRequired,
  testBody: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired


};

export default Request;








// const RadioButtonGroup = ({ name, onChange, children }) => {
//   const radioButtonsWithNameAndOnChange = React.Children.map(children, child => {
//     return React.cloneElement(child, {
//       name,
//       onChange
//     });
    
//   });
//   return (
//     <>
//       { radioButtonsWithNameAndOnChange }
//     </>
//   );
// };

// const RadioButton = ({ name, value, onChange }) => (
//   <>
//     <input id={value} type="radio" name={name} value={value} onChange={onChange} />
//     <label htmlFor={value}>{value}</label>
//   </>
// );

// const Request = ({ url, onUrlChange, body, onBodyChange, onMethodChange, onSubmit }) => (
//   <form className={styles.Request} nonSubmit={onSubmit} >
//     <input type="text" value={url} onChange={onUrlChange} />

    

//     <RadioButtonGroup name="method" onChange={onMethodChange}>
//       <RadioButton value="POST" />
//       <RadioButton value ="GET"  />
//       <RadioButton  value ="PATCH"  />
//       <RadioButton  value ="PUT" />
//       <RadioButton  value ="DELETE" />

//     </RadioButtonGroup>
    

//     <textarea value ={body} onChange={onBodyChange}></textarea>
//     <button>Submit</button>
//   </form>
// );

// Request.propTypes = {
//   url: PropTypes.string.isRequired,
//   method: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   onUrlChange: PropTypes.func.isRequired,
//   onMethodChange: PropTypes.func.isRequired, 
//   onBodyChange: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired
// };

// export default Request; 
