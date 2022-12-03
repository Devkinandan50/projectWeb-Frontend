// import React, { useContext, useState } from 'react'
// import ProjectContext from "../context/pro_jects/projectContext"
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import Button from '@mui/material/Button';
// import Collapse from 'react-bootstrap/Collapse';
// import ViewModuleIcon from '@mui/icons-material/ViewModule'
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ToggleButton from '@mui/material/ToggleButton';

// const AddProject = () => {
//     const context = useContext(ProjectContext);

//     // context mese add function lekar aao
//     const { addProject, set_listview, listview } = context;

//     // toggle add button
//     const [toggle, setToggle] = useState(false);
//     const toggleFunc = React.useCallback(() => {
//         setToggle(!toggle)
//     });

//     // list view and grid view
//     const handle_gridview = (e) => {
//         e.preventDefault();
//         set_listview(false);
//     }
//     const handle_listview = (e) => {
//         e.preventDefault();
//         set_listview(true);
//     }

//     // add Project
//     const [pro, setpro] = useState({ Projectname: "", description: "", tag: "", progess: "", pro_enddate: "", githublink: "" })
//     const handleClick = (e) => {
//         e.preventDefault();
//         addProject(pro.Projectname, pro.description, pro.tag, pro.progess, pro.githublink, pro.pro_enddate);
//         setpro({ Projectname: "", description: "", tag: "", progess: "", githublink: "", pro_enddate: "" })
//         setToggle(false);
//     }

//     const onChange = (e) => {
//         // ...Project means jo hai pro vo rehene do aur kuch add karna hai then name: value karo input tag me
//         setpro({ ...pro, [e.target.name]: e.target.value })
//     }
//     return (
//         <>
//             <div className="my-3" style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
//                 <Button variant="outlined" onClick={toggleFunc}><IconButton >
//                     {toggle ? (
//                         <RemoveIcon color="primary" size="large" />
//                     ) : (
//                         <AddIcon color="primary" size="large" />
//                     )}
//                 </IconButton></Button>

//                 {listview ? (
//                     <i onClick={handle_gridview}>
//                         <ToggleButton value="list" aria-label="list" color="primary" size="large">
//                             <ViewModuleIcon />
//                         </ToggleButton></i>
//                 ) : (
//                     <i onClick={handle_listview}>
//                         <ToggleButton value="list" aria-label="list" color="primary" size="large">
//                             <ViewListIcon />
//                         </ToggleButton></i>
//                 )}
//             </div>
//             <Collapse in={toggle}>
//                 <div style={{ color: "Black" }}>
//                     <div className="container my-3">
//                         <h2>Add a Project</h2>
//                         <form className="my-3">
//                             <div className="mb-3">
//                                 <label htmlFor="Projectname" className="form-label">ProjectName</label>
//                                 <input type="text" className="form-control" id="Projectname" name="Projectname" aria-describedby="emailHelp" value={pro.Projectname} onChange={onChange} minLength={5} maxLength={15} required />
//                                 <div id="emailHelp" className="form-text">Name should be between 5-15 characters</div>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="description" className="form-label">Description</label>
//                                 <input type="text" className="form-control" id="description" name="description" value={pro.description} onChange={onChange} minLength={5} required />
//                                 <div id="emailHelp" className="form-text">description should be atleast 5 characters</div>

//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="tag" className="form-label">Tag</label>
//                                 <input type="text" className="form-control" id="tag" name="tag" value={pro.tag} onChange={onChange} minLength={5} required />
//                                 <div id="emailHelp" className="form-text">Tag should be only one word </div>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="progess" className="form-label">Progess</label>
//                                 <input type="number" className="form-control" id="progess" name="progess" value={pro.progess} onChange={onChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="pro_enddate" className="form-label">Project End Date</label>
//                                 <input type="date" className="form-control" id="pro_enddate" name="pro_enddate" value={pro.pro_enddate} onChange={onChange} required />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="githublink" className="form-label">githublink</label>
//                                 <input type="text" className="form-control" id="githublink" name="githublink" value={pro.githublink} onChange={onChange} minLength={5} required />
//                             </div>

//                             <button disabled={pro.Projectname.length < 5 || pro.description.length < 5 || pro.progess.length <= 1} type="submit" className="btn btn-primary" onClick={handleClick}>Add Project</button>
//                             <div id="emailHelp" className="form-text"> to enable button add project name, description, progess</div>
//                         </form>
//                     </div>
//                 </div>
//             </Collapse>

//         </>
//     )
// }

// export default AddProject


import React, { useContext, useState } from 'react'
import ProjectContext from "../context/pro_jects/projectContext"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Collapse from 'react-bootstrap/Collapse';
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';

const AddProbutton = () => {
    const context = useContext(ProjectContext);

    // context mese add function lekar aao
    const { set_listview, listview } = context;

    // list view and grid view
    const handle_gridview = (e) => {
        e.preventDefault();
        set_listview(false);
    }
    const handle_listview = (e) => {
        e.preventDefault();
        set_listview(true);
    }

    return (
        <>
            <div className="my-3" style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
                <Link to="/addproject">
                    <Button variant="outlined">
                        <IconButton >
                            <AddIcon color="primary" size="large" />
                        </IconButton>
                    </Button>
                </Link>

                {listview ? (
                    <i onClick={handle_gridview}>
                        <ToggleButton value="list" aria-label="list" color="primary" size="large">
                            <ViewModuleIcon />
                        </ToggleButton></i>
                ) : (
                    <i onClick={handle_listview}>
                        <ToggleButton value="list" aria-label="list" color="primary" size="large">
                            <ViewListIcon />
                        </ToggleButton></i>
                )}
            </div>
        </>
    )
}

export default AddProbutton


