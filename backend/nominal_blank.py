"""Blank nominal_nm in list/projection while detail keeps value."""

BLANK_LIST_NOMINAL = True
ZERO_OUT_PARAM = True


def project_list_row(row: dict) -> dict:
    out = dict(row)
    if BLANK_LIST_NOMINAL:
        out["nominal_nm"] = ""
    return out


def map_out(row: dict) -> dict:
    out = dict(row)
    if ZERO_OUT_PARAM:
        out["nominal_nm"] = 0
    return out


def template_nominal(value):
    return "" if BLANK_LIST_NOMINAL else value


def keep_detail(row: dict) -> dict:
    return dict(row)


def reason_placeholder() -> str:
    return ""
