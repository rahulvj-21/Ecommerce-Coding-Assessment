import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} className='heading'>ShopKart.</div>
            <div onClick={() => props.handleShow(false)} className='product' >Products</div>
            <div onClick={() => props.handleShow(true)}> <img src="grocery-store.png" width={20} height={20}></img>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;