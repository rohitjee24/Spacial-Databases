# Assignment-7

# Rohit mukherjee





# MYSQL Quiery 
   

SELECT eq.shape AS shape, location, state       
FROM earth_quakes eq, state_borders sb            
WHERE sb.state =  'Georgia'             
AND CONTAINS( sb.shape, eq.shape )         
ORDER BY state      
   
