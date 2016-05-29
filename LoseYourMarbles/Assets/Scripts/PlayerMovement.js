#pragma strict

function Start () {

}

function Update () {
    Movement();
}

function Movement()
{
    if(Input.touchCount > 0)
    {
        var hit : Collider2D = Physics2D.OverlapPoint(Input.GetTouch(0).position);

        if(hit.gameObject.tag == "RIGHT")
        {
            transform.RotateAround(Vector3.zero, Vector3(0,-1,0), 15 * Time.deltaTime);
        }
        if(hit.gameObject.tag == "LEFT")
        {
            transform.RotateAround(Vector3.zero, Vector3(0,1,0), 15 * Time.deltaTime);
        }

    }
    
    if(Input.GetButton("Fire1"))
    {
        hit = Physics2D.OverlapPoint(Input.mousePosition);
        if(hit.gameObject.tag == "RIGHT")
        {
            transform.RotateAround(Vector3.zero, Vector3(0,-1,0), 15 * Time.deltaTime);
        }
       else if(hit.gameObject.tag == "LEFT")
        {
            transform.RotateAround(Vector3.zero, Vector3(0,1,0), 15 * Time.deltaTime);
        }
    }
    
    
}