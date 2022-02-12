import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div style={{textAlign: 'center', background: '#000000', paddingBottom:10, paddingTop:10}}>
      <span style={{fontSize:20, color: 'white'}}>Made with ❤ by {" "}</span>
      <Link href='https://instagram.com/nitesh_2_9/' target='_blank' underline='hover' fontSize={20} style={{color:'white'}}>Nitesh Jangid 🖋</Link>
    </div>
  )
}

export default Footer
