const browserTree = {
    label: "Window",
    children: [
        {
            label: "DOM - Document Object Model; DOM Tree",
            children: [
                {
                    label: "document",
                    children: [],
                },
                {
                    label: "CSSOM - CSS Object Model",
                    children: [],
                },
            ],
        },
        {
            label: "BOM - Browser Object Model",
            children: [
                {
                    label: "navigator",
                    children: [],
                },
                {
                    label: "screen",
                    children: [],
                },
                {
                    label: "location",
                    children: [],
                },
                {
                    label: "frames",
                    children: [],
                },
                {
                    label: "history",
                    children: [],
                },
                {
                    label: "XMLHttpReques",
                    children: [],
                },
            ],
        },
        {
            label: "JavaScript",
            children: [
                {
                    label: "Object",
                    children: [],
                },
                {
                    label: "Array",
                    children: [],
                },
                {
                    label: "Function",
                    children: [],
                },
                {
                    label: "...",
                    children: [],
                },
            ],
        },
    ],
};
const nodesHierarchy = {
    label: "EventTarget",
    children: [
        {
            label: "Node",
            children: [
                {
                    label: "Text",
                    children: [],
                },
                {
                    label: "Comment",
                    children: [],
                },
                {
                    label: "Element",
                    children: [
                        {
                            label: "SVGElement",
                            children: [],
                        },
                        {
                            label: "HTMLElement",
                            children: [
                                {
                                    label: "HTMLInputElement",
                                    children: [],
                                },
                                {
                                    label: "HTMLBodyElement",
                                    children: [],
                                },
                                {
                                    label: "HTMLAnchorElement",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

function renderTree(tree) {
    const rootUlElement = document.createElement("ul");
    tree.children.map(item => {
        const li = document.createElement("li");
        li.innerHTML = item.label;
        renderTree(item)
    });
    return rootUlElement;
}

export function renderPage() {
    const browserTreeList = renderTree(browserTree);
    const nodesHierarchyList = renderTree(nodesHierarchy);
    const rootDiv = document.getElementById("root");
    rootDiv.append(browserTreeList);
    rootDiv.append(nodesHierarchyList);
}


// const object = {
//     label: "rita",
//     children: {
//         label: "kirill",
//         children: {
//             label: "andrei",
//             children: {},
//         },
//     },
// };
// const treeElement = document.getElementById("root");
// const ul = document.createElement("ul");
//
// function test(obj) {
//
//     if (obj.children) {
//         const li = document.createElement("li");
//         li.innerHTML = obj.label;
//         ul.appendChild(li);
//
//         test(obj.children);
//     }
// }
//
// test(object);
// treeElement.appendChild(ul);









