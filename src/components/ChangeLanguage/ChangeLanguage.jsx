
import s from "./ChangeLanguage.module.css";

const ChangeLanguage = () =>{
      const changeLanguage = () => {
      
      };
    
      return (
        <div className={s.containerChangeLanguage}>
                <div>
                   <h4>Change language</h4>
                </div>
                 <div>
                   <button onClick={changeLanguage()}>Press here!</button>
                </div>
                <div className={s.contentSpan}>
                   <span>pt-BR or en-US</span>
                 </div>
        </div>
      );

};


export default ChangeLanguage;