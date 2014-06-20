##Assignment 5 - GIS File Types (and other stuff)

Definitions of File Types

SHP file :

A shapefile stores nontopological geometry and attribute information for the spatial features in a data set. 
The geometry for a feature is stored as a shape comprising a set of vector coordinates.
Because shapefiles do not have the processing overhead of a topological data structure,
they have advantages over other data sources such as faster drawing speed and edit ability. 
Shapefiles handle single features that overlap or that are noncontiguous. 
They also typically require less disk space and are easier to read and write.
 

OSM file :

"OpenStreetMap creates and provides free geographic data such as street maps to anyone who wants them.
 The project was started because most maps you think of as free actually have legal or technical restrictions on their use,
 holding back people from using them in creative, productive, or unexpected ways."

GeoJSON FIle :

GeoJSON is a widely-used data format for displaying vectors in web maps.
 It is based on JavaScript object notation, a simple and minimalist format for expressing data structures using syntax from JavaScript. 
 In GeoJSON, a vector feature and its attributes are represented as a JavaScript object, allowing for easy parsing of the geometry and fields.
 GeoJSON is less bulky than XML-based structures such as KML; however, GeoJSON does not always contain styling information like KML does. 
 You must define the styling on the client, which in your case means writing JavaScript code or taking the OpenLayers default styling. 
 This is covered in the next section of the lesson.

GPX :

GPX, or GPS Exchange Format, is an XML schema designed as a common GPS data format for software applications.
 It can be used to describe waypoints, tracks, and routes. The format is open and can be used without the need to pay license fees. 
 Its tags store location, elevation, and time and can in this way be used to interchange data between GPS devices and software packages.

KML :

KML is a file format used to display geographic data in a 2-D or 3-D earth browser, such as Google Earth, Google Maps. 
The markup specification was originally developed by Keyhole, Inc. for use in a product called Keyhole Earth Viewer. 
Keyhole was acquired by Google in 2004 and the product became Google Earth.

NMEA :

Your GPS receiver might output or record your tracks in NMEA format, this is a format that can easily be converted to GPX so you can upload it to our website.
 Even though GPX is preferred there are still several OpenStreetMap tools that support NMEA including new versions of JOSM.

CSV :

A comma separated values (CSV) file contains different values separated by a delimiter, 
which acts as a database table or an intermediate form of a database table. In other words, 
a CSV file file is a set of database rows and columns stored in a text file such that the rows are separated by a new line while the columns are separated by a semicolon or a comma.
 A CSV file is primarily used to transport data between two databases of different formats through a computer program.
 
WKT :

Well-known text (WKT) is a text markup language for representing vector geometry objects on a map, 
spatial reference systems of spatial objects and transformations between spatial reference systems.
 A binary equivalent, known as well-known binary (WKB) is used to transfer and store the same information on databases, 
 such as PostGIS, Microsoft SQL Server and DB2.
 
 #### Software
 
ArcGIS :

ArcGIS is a geographic information system (GIS) for working with maps and geographic information.
  It is used for: creating and using maps; compiling geographic data; analyzing mapped information; 
  sharing and discovering geographic information; using maps and geographic information in a range of applications;
  and managing geographic information in a database.

QGIS :

Using QGIS we are able to use data layers in the form of Shapefiles and Images. 
Shapefiles are geospatial data files that hold vector-based data. Vector data layers are points, lines (arcs, polylines), 
and polygons (closed shapes with defined area).

GPSBABEL :

A field defines data. There are two different classifications of FIELDS, IFIELD (file input) and OFIELD (file output). 
In the absence of any OFIELDS, IFIELDS are use as both input and output. The existence of OFIELDS is primarily to allow more flexible mapping of GPSBabel data to output data 
(say, for instance, to map the internal GPSBabel "description" variable to two or more fields on output). 
For all practical purposes, IFIELDS and OFIELDS are defined the same way in the style file.


GDAL :

GDAL (Geospatial Data Abstraction Library) is a library for reading and writing raster geospatial data formats, 
and is released under the permissive X/MIT style free software license by the Open Source Geospatial Foundation. 
As a library, it presents a single abstract data model to the calling application for all supported formats. 
It may also be built with a variety of useful command-line utilities for data translation and processing.


#### Definitions

Point : 1. A single x,y coordinate that represents a geographic feature too small to be displayed as a line or area; for example, 
            the location of a mountain peak or a building location on a small-scale map. 
        2. A coverage feature class used to represent point features or to identify polygons. 
          It is not possible to have point and polygon features in the same coverage. When representing point features, the x,y location of the label point describes the location of the feature.
          When identifying polygons, the label point can be located anywhere within the polygon. Attributes for points are stored in a PAT.
 
Curve :  A line or outline which gradually deviates from being straight for some or all of its length.
  
  
LineString : The Linestring Concept describes the requirements for a linestring type.
              All algorithms in Boost.Geometry will check any geometry arguments against the concept requirements.
              A linestring is a Curve with linear interpolation between Points. 
  
  
MultiCurve : A MultiCurve is a 1-dimensional GeometryCollection whose elements are Curves.
MultiCurve is a non-instantiable class in this specification; it defines a set of methods for its subclasses and is included for reasons of extensibility.
A MultiCurve is simple if and only if all of its elements are simple and the only intersections between any two elements occur at Points that are on the boundaries of both elements.
The boundary of a MultiCurve is obtained by applying the "mod 2" union rule: A Point is in the boundary of a MultiCurve if it is in the boundaries of an odd number of elements of the MultiCurve.
A MultiCurve is closed if all of its elements are closed. The boundary of a closed MultiCurve is always empty.A MultiCurve is defined as topologically closed.
  
  
MultiLineStrings : A MultiLineString is a MultiCurve whose elements are LineStrings.
  
  
Surface Polygons : POLYGONAL_SURFACE is a data directory which contains examples of files defining a polygonal surface.
A polygonal surface can be thought of as a surface composed of polygonal faces. The polygons must all be of the same type (triangles, quadrilaterals or whatever).
If the polygons are of higher order than triangles, the user must take care that the vertices of each polygon all lie in a plane. Otherwise, no planar polygon will pass through the vertices. 
If the nonplanarity is significant, then the display will not look right at all.
  
  
MultiPolygons :  multipolygon relation can have any number of ways in the role outer (the outline) and any number of ways in the role inner (the holes), 
                 and these must somehow form valid rings to build a multipolygon from.


#### Relationships

Touches  : 

Crosses  :
 
Within  :

Overlaps  : 
