Definitions of File Types 




SHP file  :   

A shapefile stores nontopological geometry and attribute information for the spatial
features in a data set. The geometry for a feature is stored as a shape comprising a set of
vector coordinates.Because shapefiles do not have the processing overhead of a topological data structure,
they have advantages over other data sources such as faster drawing speed and edit
ability. Shapefiles handle single features that overlap or that are noncontiguous. They
also typically require less disk space and are easier to read and write.
Shapefiles can support point, line, and area features. Area features are represented as
closed loop, double-digitized polygons. Attributes are held in a dBASE® format file.
Each attribute record has a one-to-one relationship with the associated shape record.


GeoJSON FIle : 

GeoJSON is a widely-used data format for displaying vectors in web maps. It is based on JavaScript object notation,
a simple and minimalist format for expressing data structures using syntax from JavaScript. In GeoJSON,
a vector feature and its attributes are represented as a JavaScript object, allowing for easy parsing of the geometry and fields.
GeoJSON is less bulky than XML-based structures such as KML; however, GeoJSON does not always contain styling 
information like KML does. You must define the styling on the client, which in your case means writing JavaScript code or taking the OpenLayers default styling. This is covered in the next section of the lesson.

GPX      :  

GPX, or GPS Exchange Format, is an XML schema designed as a common GPS data format for software applications.
It can be used to describe waypoints, tracks, and routes. The format is open and can be used without the need to pay license fees. Its tags store location, elevation, and time and can in this way be used to interchange data between GPS devices and software packages.


KML      : 


KML is a file format used to display geographic data in a 2-D or 3-D earth browser, such as Google Earth, Google Maps. 
The markup specification was originally developed by Keyhole, Inc. for use in a product called Keyhole Earth Viewer. Keyhole was acquired by Google in 2004 and the product became Google Earth. 


NMEA     : 
 
 Your GPS receiver might output or record your tracks in NMEA format, this is a format that can easily be converted to GPX
 so you can upload it to our website. Even though GPX is preferred there are still several OpenStreetMap tools that support 
 NMEA including new versions of JOSM.
 
 
CSV       : 
 
A comma separated values (CSV) file contains different values separated by a delimiter, which acts as a database
 table or an intermediate form of a database table. In other words, a CSV file file is a set of database rows and columns stored in a text file such that the rows are separated by a new line while the columns are separated by a semicolon or a comma. A CSV file is primarily used to transport data between two databases of different formats through a computer program.
 
 
QGIS      : 

Using QGIS we are able to use data layers in the form of Shapefiles and Images. Shapefiles are geospatial 
data files that hold vector-based data. 
Vector data layers are points, lines (arcs, polylines), and polygons (closed shapes with defined area). 

GPSBABEL   :

A field defines data. There are two different classifications of FIELDS, IFIELD (file input) and OFIELD (file output).
 In the absence of any OFIELDS, IFIELDS are use as both input and output. 
 The existence of OFIELDS is primarily to allow more flexible mapping of GPSBabel data to
 output data (say, for instance, to map the internal GPSBabel "description" variable to two or more fields on output). 
 For all practical purposes, IFIELDS and OFIELDS are defined the same way in the style file.


