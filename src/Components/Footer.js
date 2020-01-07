import React from 'react';
import './Footer.css';
const tabContry=[
{
name:'Poland',
link:'//www.znanylekarz.pl'
},
{
    name:'Turkey',
    link:'//www.doktortakvimi.com'
    },
    {
        name:'Spain',
        link:'//www.doctoralia.es'
        },
        {
            name:'Italy',
            link:'//www.miodottore.it'
            },
            {
                name:'Czech',
                link:'//www.znamylekar.cz'
                },
                {
                    name:'Mexico',
                    link:'//www.doctoralia.com.mx'
                    },
                    {
                        name:'Brazil',
                        link:'http://www.doctoralia.com.br'
                        },
                        {
                            name:'Argentina',
                            link:'http://www.doctoraliar.com'
                            },
                            {
                                name:'Chile',
                                link:'http://www.doctoralia.cl'
                                }
]
const tabParag=[
{parag1:'We are leaders in 10 countries:',
parag2:'This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.',
parag3:'www.docplanner.com © 2019'

}

]




const Footer=()=>(
<div className='footer'>
{tabParag.map(elm=>(
    <div className='footer-section'>
<p>{elm.parag1}{tabContry.map(el=>(
<a src={el.link}>{el.name==="Chile" &&(<span className="and">And </span>)}{el.name} </a>
))}</p>
<p>{elm.parag2}</p>
<p> {elm.parag3}</p>

    </div>

))}

</div>
)

export default Footer;