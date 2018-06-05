# Buglist


## Frontend

### Sidebar
### Vyhledávání
- nelze se vrátit do defaultního stavu

#### Filter podle roku realizace
- nefunkční
- chyba stylů – jezdec přejíždí minimum a maximum
- posouvání není plynulé – možná zkusit jinej plugin

#### Seznamy staveb
- nefunkční podbarvení a přidání křížku 
- nelze se vrátit do defaultního stavu ( zrušit aktivovaný seznam staveb )

### Galerie
- content galerie vjíždí do menu, které je transparentní
	- horní strana contantu by měla končit pod spodní stranou hlavičky
- při skrytí sidebaru se content galerie nevycentruje

### Detail stavby
- popis stavby nemá odstavce, přitom v DB jsou zohledněny


## Backend
- položky nejsou řazeny ani podle abacedy ani podle ID. nedá se v tom vyznat

### Přidání stavby
- po kliknutí na plusko se přidá nová ( prázdná ) položka někam doprostřed seznamu a člověk ji musí dohledat a pak teprve kliknout na editaci
- bylo dobré mít možnost přidat architekta při vytváření stavby. jinak se člověk musí vracet a první vytvořit architekta a pak teprve stavbu
- pokud smažu stavbu, která je v seznamu staveb (např. Stavby století), tak seznam přestane fungovat na frontendu, protože se snaží načíst stavbu, která už neexistuje
